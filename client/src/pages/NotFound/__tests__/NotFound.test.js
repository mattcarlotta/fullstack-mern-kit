import NotFound from "../index";

const wrapper = shallow(<NotFound />);

describe("NotFound", () => {
	it("renders without errors", () => {
		expect(wrapper.find(".notfoundContainer").exists()).toBeTruthy();
	});
});
