describe("form submission", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("Type in searchfield and click match", () => {
		cy.get("input").type("tato");
		cy.contains("Tatooine").then((option: HTMLElement) => {
			option[0].click();
			cy.get("[data-cy=Tatooine]").should("be.visible");
			cy.get("[data-cy=delete]").click();
			cy.get("[data-cy=Tatooine]").should("not.exist");
		});
	});
	it("Click and render planet card", () => {
		cy.get("input").type("tato");
		cy.contains("Tatooine").then((option: HTMLElement) => {
			option[0].click();
			cy.get("[data-cy=Tatooine]").should("be.visible");
		});
	});
	it("Delete planet card", () => {
		cy.get("input").type("tato");
		cy.contains("Tatooine").then((option: HTMLElement) => {
			option[0].click();
			cy.get("[data-cy=delete]").click();
			cy.get("[data-cy=Tatooine]").should("not.exist");
		});
	});
});
