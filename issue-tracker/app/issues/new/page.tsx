"use client";
import { Button, Callout, TextArea, TextField, Text } from "@radix-ui/themes";
import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import createIssueSchema from "@/app/ValidationSchema";
import { z } from "zod";
import ErrorMessages from "@/app/components/ErrorMessages";

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  const [error, setError] = useState("");

  const onSubmit = async (data: IssueForm) => {
    try {
      await axios.post("/api/issues", data);

      router.push("/issues");
    } catch (error) {
      setError("An unexpected error occuered");
      console.error("Error submitting the issue:", error);
    }
  };

  return (
    <div className="max-w-xl ">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        {/* <TextField.Root> */}
        <TextField.Root placeholder="Title" {...register("title")} />
        <ErrorMessages>{errors.title?.message}</ErrorMessages>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description..." {...field} />
          )}
        />
        <ErrorMessages>{errors.description?.message}</ErrorMessages>

        <Button>Submit New Isue</Button>
        {/* <TextField.Root>   */}
      </form>
    </div>
  );
};

export default NewIssuePage;
