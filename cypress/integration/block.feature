Feature: Block

    Block related features

    Scenario: Change block content
        Given I see at least one block
        When I click block Edit button
        And I replace content with text 'replaced block content'
        And I save Block
        Then I see block with text "replaced block content"

