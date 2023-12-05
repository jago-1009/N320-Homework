Note: Project is not uploaded to the Web Server

# Homework 7 | Assignment

## Purpose

This homework assignment will:

- understanding basic disciplinary knowledge and methods/tools
- applying basic disciplinary/knowledge and problem-solving skills
- challenge your knowledge of an application structure of a Vue project

## Task

This assignment is part 1 of a two-part assignment.

To complete this homework, complete the following tasks. The image below illustrates a possible outcome for this project.

1. Create a Vue project called assignment_7.
2. You will use (See Data at the Bottom) for your project.
3. You will create a form that allows for the following:
   1. Team Name: input
   2. Member role: either Developer, Designer, or UI/UX
4. When you click the submit button on the form above, the filtered list will appear below the form. Each member will have the following information:
   1. Title
   2. Role
   3. Buttons
      1. Show/Hide Details button: this button will reveal all the data about the member
      2. Join Button: This button will list the team entered in the form. For example, if the team name entered was Fire Dragons, it would read 'Join Fire Dragons."
5. Show/Hide Button will be available for all members. It will toggle the visibility of their information. The text on the button will also reflect this change. For example, the button will say "Show Details" if the details are hidden. If the details are visible, the button will say "Hide Details."
6. When the join button is clicked, a couple of things will happen:
   1. That member's information will be updated so that the team property will have the value of the team (for example, Fire Dragons).
   2. The member's information will be added to a TeamsList array.
   3. The Join Button will disappear for that user since they are already on a team.
7. Incorporate slots for the buttons and to style member information.
8. Incorporate props and emits.
9. Create a readme.md file.
10. Upload your **SRC folder ONLY** to github.
11. Submit your github for the assignment submission.


# Homework 8 | Assignment

## Purpose
This homework assignment is designed to enhance your skills in the following areas:
- Understanding basic disciplinary knowledge and methods/tools.
- Applying basic disciplinary knowledge and problem-solving skills.
- Challenging your knowledge of the application structure of a Vue project.

## Task
This assignment is part 2 of a two-part series.

To complete this homework, carry out the following tasks. The provided image illustrates a potential outcome for this project.

1. Continue using the files from Assignment 7.
2. Implement routing with three routes:
   - The default route should direct to the form.
   - `teams` should navigate to the teams page.
   - `members` should lead to the form/members selection page.
3. Create a Vue file for navigation controls. Import this component only into the `App.vue` page.
4. Develop a teams page that displays individual teams along with their members. (Refer to the images provided.)
   - On the teams page, member information should be visible automatically without the need for a hide/show button.
5. Create a `readme.md` file.
6. Upload only your `SRC` folder to GitHub.
7. Submit your GitHub link for the assignment submission.

**Note:** Organization of your project is crucial and will be considered in your grading.

## Extra Credit
1. **Delete Member Feature (5 points):** Implement a feature to delete a team member. Upon selection, the member should be removed from the team and be available for selection in another team.
2. **Team Leader Selection (10 points):**
   - Add a feature to designate a team member as the Team Leader.
   - Upon selecting a team leader, the option for selecting team leaders in other members should disappear.
   - The selected Team Leader's button should display "Current Team Leader." On clicking this button post-selection, it should:
      - Remove the member as the team leader.
      - Re-enable the Team Leader selection buttons for all members.


Data:
```
members: [
        {
          id: 1,
          name: 'Chandler Bing',
          phone: '123 123 1234',
          email: 'cBing@gmail.com',
          role: 'Developer',
          team: ''
        },
        {
          id: 2,
          name: 'Joey Tribbiani',
          phone: '321 321 4321',
          email: 'jtribby@gmail.com',
          role: 'UI/UX',
          team: ''
        },
        {
          id: 3,
          name: 'Ross Geller',
          phone: '222 333 4444',
          email: 'rgeller@gmail.com',
          role: 'Developer',
          team: ''
        },
        {
          id: 4,
          name: 'Monica Bing',
          phone: '123 123 1235',
          email: 'mbing@gmail.com',
          role: 'Designer',
          team: ''
        },
        {
          id: 5,
          name: 'Rachel Green',
          phone: '876 345 1678',
          email: 'rgreen@gmail.com',
          role: 'UI/UX',
          team: ''
        },
        {
          id: 6,
          name: 'Phoebe Buffay',
          phone: '678 908 5686',
          email: 'pbuff@gmail.com',
          role: 'UI/UX',
          team: ''
        },
        {
          id: 7,
          name: 'Stacy Boling',
          phone: '345 679 4212',
          email: 'sBoling@gmail.com',
          role: 'Designer',
          team: ''
        },
        {
          id: 8,
          name: 'Jake Trimult',
          phone: '443 665 7888',
          email: 'jtrim@gmail.com',
          role: 'Developer',
          team: ''
        },
        {
          id: 9,
          name: 'Rose Greathouse',
          phone: '345 567 9087',
          email: 'rgreat@gmail.com',
          role: 'UI/UX',
          team: ''
        },
        {
          id: 10,
          name: 'Mindy Kellum',
          phone: '555 666 7777',
          email: 'mKellum@gmail.com',
          role: 'UI/UX',
          team: ''
        },
        {
          id: 11,
          name: 'Sarah Miller',
          phone: '987 654 1234',
          email: 'smiller@gmail.com',
          role: 'Developer',
          team: ''
        },
        {
          id: 12,
          name: 'Caroline Bender',
          phone: '111 222 3456',
          email: 'cBend@gmail.com',
          role: 'Designer',
          team: ''
        }
]
```

