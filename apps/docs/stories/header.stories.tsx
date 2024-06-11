import type { Meta, StoryObj } from "@storybook/react";
import { Button, Header } from '@acme/ui'

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  render: (props) => (
    <Header {...props} />
  ),
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis dignissim velit. Suspendisse luctus id dolor eu pellentesque. Integer viverra dictum egestas. Suspendisse sed laoreet ipsum. Pellentesque sodales faucibus mi, non ornare neque pharetra et. Ut quis egestas orci. Phasellus tincidunt porttitor lacus, nec ornare turpis ultricies eu.',
    title: 'Header title',
    button: <Button>Call to action</Button>
  },
  argTypes: { 
    button: {
      control: false,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. `Button` component', 
    }
  }
};

export const Secondary: Story = {
  render: (props) => (
    <Header {...props} />
  ),
  args: {
    children: 'Quo corporis ea odio autem aut quia unde non. Aut sit reiciendis alias. Eum consequuntur perspiciatis iste eligendi error. Possimus dolor ex praesentium ut id. Accusantium explicabo voluptatibus maiores. Sed molestiae aut earum. Assumenda sit omnis et nesciunt esse est non autem.', 
    title: Primary.args?.title,
    button: null
  },
  argTypes: { 
    ...Primary.argTypes,
    button: {
      defaultValue: false,
      control: { type: 'boolean' },
      mapping: {
        // eslint-disable-next-line no-alert -- alert for demo
        true: <Button onClick={() => { alert('onButtonClick!'); }}>Call to action</Button>,
        false: null
      },
    }
  }
};
