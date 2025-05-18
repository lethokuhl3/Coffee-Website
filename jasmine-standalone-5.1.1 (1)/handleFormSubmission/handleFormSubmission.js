import { handleFormSubmission } from "../../script/checkout.js";

describe("handleFormSubmission", () => {
  let form,
    nameInput,
    emailInput,
    cardNumberInput,
    expiryInput,
    cvcInput;

    let alertSpy,event;

   beforeEach(() => {

    form = document.getElementById("checkout-form");
    nameInput = document.getElementById("name");
    emailInput = document.getElementById("email");  
    cardNumberInput = document.getElementById("card-number");
    expiryInput = document.getElementById("expiry");
    cvcInput = document.getElementById("cvc");
    alertSpy = spyOn(window, "alert");
    event = {
      preventDefault: jasmine.createSpy("preventDefault"),
      target: form,}
    });

  it("should be defined", () => {
    expect(handleFormSubmission).toBeDefined();
    expect(typeof handleFormSubmission).toBe("function");
  });

  it("should alert if name is empty", () => {
    nameInput.value = "";
    emailInput.value = "test@example.com";
    cardNumberInput.value = "1234567812345678";
    expiryInput.value = "12/25";
    cvcInput.value = "123";
    handleFormSubmission(event);
    expect(event.preventDefault).toHaveBeenCalled();
    expect(alertSpy).toHaveBeenCalledWith("Please enter your name.");
  });

  it("should alert if email is invalid", () => {
    nameInput.value = "John Doe";
    emailInput.value = "invalid-email";
    cardNumberInput.value = "1234567812345678";
    expiryInput.value = "12/25";
    cvcInput.value = "123";
    handleFormSubmission(event);
    expect(event.preventDefault).toHaveBeenCalled();
    expect(alertSpy).toHaveBeenCalledWith("Please enter a valid email address.");
  });


});