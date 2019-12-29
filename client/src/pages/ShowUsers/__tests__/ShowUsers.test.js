import ShowUsersPage from "../index";

const wrapper = HOCWrap(ShowUsersPage);

describe("Show Users Page", () => {
	it("renders without errors", () => {
		expect(wrapper.find("ShowUsers").exists()).toBeTruthy();
	});
});
