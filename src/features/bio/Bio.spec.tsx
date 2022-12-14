import Bio from "./Bio";
import { render } from "../../test.utils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Bio Component", () => {
  describe("when renders the default state", () => {
    it("renders bart's active button", () => {
      render(<Bio />);
      const activeButton = screen.getByText("BART");
      expect(activeButton).toHaveStyle("background-color: #fdd835");
    });
    it("and bart's image", () => {
      render(<Bio />);
      const activeCharacterImage = screen.getByAltText("Bart Simpson");
      expect(activeCharacterImage).toHaveAttribute("src", "bart.png");
    });
    it("and bart's name", () => {
      render(<Bio />);
      const activeCharacterName = screen.getByText("Bart Simpson");
      expect(activeCharacterName).toBeVisible();
    });
    it("and bart's bio", () => {
      render(<Bio />);
      const activeCharacterBio = screen.getByText(
        "Aos dez anos, Bart é o filho mais velho e único de Homer e Marge. e o irmão de Lisa e Maggie. Os traços de caráter mais proeminentes e populares de Bart são sua malícia, rebelião e falta de respeito pela autoridade."
      );
      expect(activeCharacterBio).toBeVisible();
    });
  });
  describe("when another character's name button is clicked", () => {
    it("renders that characters active button", async () => {
      render(<Bio />);
      const maggieButton = screen.getByRole("button", { name: "MAGGIE" });
      await userEvent.click(maggieButton);
      expect(maggieButton).toHaveStyle("background-color: #fdd835");
    });
    it("and that character's image", async () => {
      render(<Bio />);
      const maggieButton = screen.getByRole("button", { name: "MAGGIE" });
      await userEvent.click(maggieButton);

      const activeCharacterImage = screen.getByAltText("Maggie Simpson");
      expect(activeCharacterImage).toHaveAttribute("src", "maggie.png");
    });
    it("and that character's name", async () => {
      render(<Bio />);
      const maggieButton = screen.getByText("MAGGIE");
      await userEvent.click(maggieButton);

      const activeCharacterName = screen.getByText("Maggie Simpson");
      expect(activeCharacterName).toBeVisible();
    });
    it("and that character's bio", async () => {
      render(<Bio />);
      const activeCharacterButton = screen.getByRole("button", { name: "MAGGIE" });
      await userEvent.click(activeCharacterButton);

      const activeCharacterBio = screen.getByText(
        "Maggie é a filha mais nova de Homer e Marge, e a irmã mais nova de Bart. e Lisa. Ela é muitas vezes vista chupando sua chupeta vermelha, e quando ela anda, ele tropeça em suas roupas e cai de cara. Sendo um bebê, ele ainda não aprendeu a falar."
      );
      expect(activeCharacterBio).toBeVisible();
    });
    it("removes the active button from previous character", async () => {
      render(<Bio />);
      const activeCharacterButton = screen.getByRole("button", { name: "MAGGIE" });
      await userEvent.click(activeCharacterButton);

      const prevActiveCharacterButton = screen.getByText("BART");
      expect(prevActiveCharacterButton).not.toHaveStyle("background-color: #fdd835");
    });
  });
});
