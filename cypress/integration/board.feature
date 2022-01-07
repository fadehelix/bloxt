Feature: Board

  Board related features

  Scenario: Copy as markdown
    # Given Board contains text "<h2>Bloxt is a text editor that allows you to build article from blocks</h2><p>Just write down your ideas and <strong>sort them</strong> later by dragging up and down</p>"
    When I click "Copy as Markdown" button
    Then Clipboard contains text "## Bloxt is a text editor that allows you to build article from blocks\n\nJust write down your ideas and **sort them** later by dragging up and down"
    And I see notification "Copied"



## Bloxt is a text editor that allows you to build article from blocks\\nJust write down your ideas and **sort them** later by dragging up and down