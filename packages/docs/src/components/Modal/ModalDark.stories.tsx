import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  ModalDark,
  ModalDarkProps,
  OutlineButton,
  PrimaryButton,
} from "@orioncore/react";
import { DevToLogo } from "@phosphor-icons/react";

export default {
  title: "Dialog/Modal",
  component: ModalDark,
  argTypes: {
    $iconColor: {
      options: [
        "flash_black",
        "flash_white",
        "success",
        "alert",
        "info",
        "highlight",
      ],
      control: {
        type: "select",
      },
    },
    $iconBgColor: {
      options: [
        "flash_black",
        "flash_white",
        "success",
        "alert",
        "info",
        "highlight",
      ],
      control: {
        type: "select",
      },
    },
  },
} as Meta;

export const DarkModal: StoryObj<ModalDarkProps> = (args: any) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenChange(open: boolean) {
    setIsOpen(open);
  }

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <>
      <PrimaryButton
        $wFull
        onClick={handleOpen}
        $variantRadius="md"
        $variantSize="md"
      >
        Abrir
      </PrimaryButton>
      <ModalDark
        $isOpen={isOpen}
        $onOpenChange={handleOpenChange}
        closable={false}
        {...args}
      >
        <main
          style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}
        >
          <h3 style={{ color: "#fff", margin: 0 }}>Modal Title</h3>
          <p style={{ color: "#fff", fontSize: "0.75rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            quaerat.
          </p>
        </main>
        <footer
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <OutlineButton
            onClick={handleClose}
            $color="flash_white"
            $variantSize="sm"
            $variantRadius="sm"
          >
            Fechar
          </OutlineButton>
        </footer>
      </ModalDark>
    </>
  );
};

DarkModal.args = {
  $title: "Titúlo do Modal",
  $iconTitle: <DevToLogo size={24} />,
  $width: "50%",
  $closable: false,
};
