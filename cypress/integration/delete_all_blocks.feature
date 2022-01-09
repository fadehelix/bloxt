Feature: Delete All Blocks

    https://github.com/fadehelix/bloxt/issues/16

    Scenario: Clear Board by clicking "Delete all blocks" button
        Given I see at least one block
        When I click "Delete all blocks" button
        Then I see empty Board

