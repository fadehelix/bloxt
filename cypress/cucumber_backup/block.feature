Feature: Block

    Block related features

    Scenario: Change block content
        Given I see at least one block
        When I click block Edit button
        And I replace content with text 'replaced block content'
        And I save Block
        Then I see block with text "replaced block content"

    Scenario: Avoid to create an empty block
        Given I am in the Block edit mode
        And Block content is empty
        When I save Block
        Then I see notification "Block content cannot be empty"
        And I am still in the Block edit mode