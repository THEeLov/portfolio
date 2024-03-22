"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  message: z.string(),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <h3 className="text-white">Contact Me</h3>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 text-white w-full flex justify-center"
      >
        <div className="contact flex-col gap-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Name"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full border h-full">
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    {...field}
                    className="h-40"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant="ghost" className="w-full bg-white text-black mb-8" type="submit">
            Send
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Contact;
