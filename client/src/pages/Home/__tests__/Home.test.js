import Home from "../index";

const wrapper = HOCWrap(Home);

describe("Home Page", () => {
	it("renders without errors", () => {
		expect(wrapper.find("Spinner").exists()).toBeTruthy();
	});
});
