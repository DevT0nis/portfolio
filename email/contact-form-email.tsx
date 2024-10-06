import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nova mensagem do portfólio</Preview>
      <Tailwind>
        <Body className="bg-gray-900 text-white font-sans">
          <Container className="bg-gray-800 shadow-2xl rounded-lg max-w-lg mx-auto mt-10 p-8">
            <Section className="border border-gray-700 rounded-lg p-6">
              <Heading className="text-3xl font-semibold mb-6 text-center text-gray-100">
                💬 Nova Mensagem Recebida
              </Heading>
              <Text className="text-lg text-gray-300 mb-4">
                Você recebeu a seguinte mensagem:
              </Text>
              <Text className="bg-gray-700 p-5 my-4 rounded-md text-gray-100 border border-gray-600">
                {message}
              </Text>
              <Hr className="border-t border-gray-700 my-8" />
              <Text className="text-sm text-gray-500 mb-2">
                E-mail do remetente:
              </Text>
              <Text className="text-md text-indigo-400 font-medium">{senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
