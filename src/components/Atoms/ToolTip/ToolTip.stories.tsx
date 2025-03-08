import type { Meta, StoryObj } from '@storybook/react';
import ToolTip from  './Lazy';

const metaToolTip: Meta<typeof ToolTip> = {
	title: 'Components/Atoms/ToolTip',
	component: ToolTip,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div className="h-[90px] mb-5 mt-5 p-5 text-center">
				<Story />
			</div>
		),
	],
    argTypes: {
        text: {
          control: "text"
        },
        position: {
          control: "select",
          options: ['top', 'bottom', 'left', 'right'],
        }
      },
};

export default metaToolTip;
type Story = StoryObj<typeof ToolTip>;

export const Default: Story = {
	args: {
		text: 'Default : top',
		position: 'top',
        children: "Default top tooltip",
	},
};

export const Bottom: Story = {
	args: {
		text: 'Bottom',
		position: 'bottom',
        children: "Bottom tooltip",
	},
};

export const Left: Story = {
	args: {
        text: 'Left',
		position: 'left',
        children: "Left tooltip",
	},
};

export const Right: Story = {
	args: {
		text: 'Right',
		position: 'right',
        children: "Right tooltip",
	},
};
