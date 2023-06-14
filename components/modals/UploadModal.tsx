"use client";
import { FC, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import uniqid from "uniqid";

// Types

// Hooks
import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

// Actions

// Components
import Modal from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { Router } from "lucide-react";

interface UploadModalProps {}

const UploadModal: FC<UploadModalProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const uploadModal = useUploadModal();
  const { user } = useUser();
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      artist: "",
      title: "",
      song: null,
      image: null,
    },
  });

  const handleOnChange = (open: boolean) => {
    if (!open) {
      reset();
      uploadModal.onClose();
    }
  };

  const handleOnSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      setIsLoading(true);
      const imageFile = values.image?.[0];
      const songFile = values.song?.[0];
      if (!imageFile || !songFile || !user) {
        setIsLoading(false);
        return toast.error("Please fill out all fields");
      }
      const uniqueId = uniqid();

      const { data: songData, error: songError } = await supabaseClient.storage
        .from("songs")
        .upload(
          `song-${values.title.replace(/\s/g, "-")}-${uniqueId}`,
          songFile,
          {
            cacheControl: "3600",
            upsert: false,
          }
        );
      if (songError) {
        return toast.error("Failed to upload song.");
      }

      const { data: imageData, error: imageError } =
        await supabaseClient.storage
          .from("images")
          .upload(
            `cover-image-${values.title.replace(/\s/g, "-")}-${uniqueId}`,
            imageFile,
            {
              cacheControl: "3600",
              upsert: false,
            }
          );
      if (imageError) {
        return toast.error("Failed to upload cover image.");
      }

      const { error: supabaseError } = await supabaseClient
        .from("songs")
        .insert({
          user_id: user.id,
          title: values.title,
          artist: values.artist,
          image_path: imageData.path,
          song_path: songData.path,
        });
      if (supabaseError) {
        return toast.error("Upload failed.");
      }

      router.refresh();
      toast.success(`${values.title} by ${values.artist} uploaded.`);
      reset();
      uploadModal.onClose();
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="Upload song"
      description="Upload your song. It must be an MP3 file."
      isOpen={uploadModal.isOpen}
      onChange={handleOnChange}
    >
      <form
        className="flex flex-col gap-y-4"
        onSubmit={handleSubmit(handleOnSubmit)}
      >
        <Input
          id="title"
          disabled={isLoading}
          {...register("title", { required: true })}
          placeholder="Song title"
        />
        <Input
          id="artist"
          disabled={isLoading}
          {...register("artist", { required: true })}
          placeholder="Artist name"
        />
        <div>
          <p className="pb-1">Upload a song file (mp3)</p>
          <Input
            id="song"
            disabled={isLoading}
            type="file"
            {...register("song", { required: true })}
            accept=".mp3"
          />
        </div>
        <div>
          <p className="pb-1">Upload a cover image</p>
          <Input
            id="image"
            disabled={isLoading}
            type="file"
            {...register("image", { required: true })}
            accept="img/*"
          />
        </div>
        <Button
          isLoading={isLoading}
          disabled={isLoading}
          type="submit"
          aria-label="Upload song"
        >
          Upload
        </Button>
      </form>
    </Modal>
  );
};

export default UploadModal;
