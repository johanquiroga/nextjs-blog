import React from "react";
import { render, screen, waitForElementToBeRemoved } from "test-utils";
import user from "@testing-library/user-event";

import RegisterForm from "../register-form";

test("calls onSubmit with user data", async () => {
  const fakeUser = {
    email: "test@mail.com",
    password: "Wavely1234"
  };
  const handleSubmit = jest.fn();
  render(<RegisterForm onSubmit={handleSubmit} />);

  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const passwordInput = screen.getByLabelText(/password/i, {
    selector: "#password"
  });
  const confirmPasswordInput = screen.getByLabelText(/confirm password/i);
  const submitBtn = screen.getByRole("button");

  user.type(emailInput, fakeUser.email);
  user.type(passwordInput, fakeUser.password);
  user.type(confirmPasswordInput, fakeUser.password);
  user.click(submitBtn);

  expect(submitBtn).toBeDisabled();
  await waitForElementToBeRemoved(() => screen.getByRole("progressbar"));

  expect(handleSubmit).toHaveBeenCalledWith({
    ...fakeUser,
    confirmPassword: fakeUser.password
  });
  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
