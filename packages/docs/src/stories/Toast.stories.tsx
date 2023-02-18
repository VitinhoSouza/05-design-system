import type { Meta, StoryObj } from "@storybook/react";
import { Button, Toast, ToastProps } from "@ignite-ui-vitinho/react";
import { useState } from "react";

export default {
  title: "Data display/Toast",
  component: Toast,
  args: {
    title: "Agendamento realizado",
    subtitle: "Quarta-feira, 23 de Outubro às 16h",
    amountOfSecondsForCloseToast: 5,
  },
  decorators: [
    (Toast) => {
      const [toastIsActive, setToastIsActive] = useState(false);
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <Button
            size={"sm"}
            onClick={() => setToastIsActive(true)}
            style={{ maxWidth: "10rem" }}
          >
            Abrir toast
          </Button>
          {toastIsActive && (
            <Toast closeToast={() => setToastIsActive(false)} />
          )}
        </div>
      );
    },
  ],
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {};
