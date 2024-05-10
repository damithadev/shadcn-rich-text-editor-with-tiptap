"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import RichTextEditor from "../components/text-editor";

const formSchema = z.object({
  about: z.string().min(2, {
    message: "about must be at least 2 characters.",
  }),
});

export default function ProfileForm() {
  useEffect(() => {
    console.log("Hello");
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      about: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="w-1/2 h-screen mx-auto space-y-20">
      <h1 className="flex justify-center pt-20 text-2xl font-medium">
        Rich Text Editor Developed Using Shadcn and Tiptap
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="about"
            render={({ field }) => (
              <FormItem>
                <FormLabel>About</FormLabel>
                <FormControl>
                  <RichTextEditor {...field} />
                </FormControl>
                <FormDescription>
                  Tell a little bit about yourself.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
