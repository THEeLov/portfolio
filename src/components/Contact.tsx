"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  username: z.string().min(1).max(50),
  email: z.string().email(),
  message: z.string(),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  return (
    <Form {...form}>
      <h3 id="contact" className="text-white mt-10">Contact Me</h3>
      <form
        className="space-y-8 text-white w-full flex justify-center"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <input type="hidden" name="access_key" value="15265a61-f3b9-4fad-b942-a2d7c28d4a06"></input>
        <div className="contact flex flex-col gap-6">
          
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
              <FormItem className="w-full h-full">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    {...field}
                    className="h-60"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full bg-white text-black mb-10 hover:bg-neutral-600 hover:text-white" type="submit">
            Send
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Contact;
