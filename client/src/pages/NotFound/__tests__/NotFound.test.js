import NotFound from "../index";

const wrapper = HOCWrap(NotFound);

describe("Not Found Page", () => {
	it("renders without errors", () => {
		expect(wrapper.find("Spinner").exists()).toBeTruthy();
	});
});
