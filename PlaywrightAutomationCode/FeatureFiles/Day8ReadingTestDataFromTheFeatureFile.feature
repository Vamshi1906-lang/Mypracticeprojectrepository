Feature: Reading the feature file data

    @featureData1
    Scenario:  Reading the feature files data

        Given I launch the browser10
        Then I launch the practice Site
        Then I read the data from feature file "<Name>","<Email>","<Phone>","<Adress>","<Wikipedia>"

        Examples:
            | Name   | Email            | Phone      | Adress    | Wikipedia |
            | vamshi | vamshi@gmail.com | 9876543210 | Hyderabad | Testing   |
    #| krishna | krisha@gmail.com | 9876543211 | Amaravathi | Testingplaywright |
    #| raju    | raju@gmail.com   | 9876543212 | Vizag      | TestingTypescript |
    #Examples:
    # | Field1           | Field2         |
    # | Hello typescript | Welcome coding |


    @featureData2
    Scenario:  Reading the feature files data

        Given I launch the browser10
        Then I launch the practice Site
        Then I read the Field1 Field2 and dropwon data from feature file "<Field1>","<Field2>","<color1>","<color2>","<color3>"

        Examples:
            | Field1           | Field2         | color1 | color2 | color3 |
            | Hello typescript | Welcome coding | Red    | Blue   | Green  |

