import Root from "../index";

const wrapper = mount(<Root />);

describe("Root", () => {
	it("renders without errors", () => {
		expect(wrapper.find("div#routes").exists()).toBeTruthy();
	});
});
