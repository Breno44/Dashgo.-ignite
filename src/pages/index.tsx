import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import Router from "next/router";

export default function Home() {
  function handleLogin(e) {
    e.preventDefault();

    Router.push("/dashboard");
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail" />

          <Input name="password" type="password" label="Senha" />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          onClick={(e) => handleLogin(e)}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
