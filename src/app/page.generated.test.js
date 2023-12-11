import renderer from "react-test-renderer";
import Image from "next/image";
import Link from "next/link";
import Home from "./page";

jest.mock("next/image");
jest.mock("next/link");

const renderTree = (tree) => renderer.create(tree);
describe("<Home>", () => {
  it("should render component", () => {
    expect(renderTree(<Home />).toJSON()).toMatchSnapshot();
  });
});
