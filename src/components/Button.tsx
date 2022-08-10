import { Button as NBButton, Heading, IButtonProps, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <NBButton
      bg="darkBlue.500"
      h={14}
      fontSize="sm"
      rounded="sm"
      w="full"
      _pressed={{
        bg: "darkBlue.600",
      }}
      {...rest}
    >
      <Heading color="white" fontSize="md">
        {title}
      </Heading>
    </NBButton>
  );
}
