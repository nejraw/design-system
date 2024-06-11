import type { Meta, StoryObj } from "@storybook/react";
import { Button } from '@acme/ui' 

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (props) => (
    <Button
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from button!");
      }}
    >
      {props.children}
    </Button>
  ),
  name: "Button",
  args: {
    children: "Button",
    type: "button",
  },
};
