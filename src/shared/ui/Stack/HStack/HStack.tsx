import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>

export const HStack = (props: HStackProps) => {
  const { justify = 'start' } = props;
  return (
    <Flex {...props} direction="row" justify={justify} />
  );
};
