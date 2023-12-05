/**
 * Author: Jay Annadurai
 * Date: 28 Nov 2023
 * File: Teams.js
 * Project: 7-vue
 * Description: Class to Represent a 'Teams' Object full of Teams
 */

//Import the Member Class
import Member from './Member';

//Import the Team Class
import Team from './Team';

class Teams {
    /**
     * Constructor for the Teams class
     * @param {...Team} teams - Accepts multiple Team objects.
     */
    constructor(...teams) {
        // Only include instances of Team in the list array
        this.list = teams.filter(team => team instanceof Team);
    }

    /**
     * Update an existing team with a new Team object
     * @param {Team} teamToUpdate - Team object to update the existing team with
     * @return {Teams}
     */
    update(teamToUpdate) {
        // Ensure the provided object is an instance of Team
        if (!(teamToUpdate instanceof Team)) {
            console.log("Provided object is not an instance of Team");
            return;
        }

        // Find the team object with the same name as the provided team object
        const existingTeam = this.list.find(team => team.name === teamToUpdate.name);

        // If no team is found, log an error and return
        if (!existingTeam) {
            console.log(`No team found with the name ${teamToUpdate.name}`);
            return;
        }

        // Walk through the List Array and replace the Team with the same Name with the new Team
        this.list = this.list.map( team => team.name === teamToUpdate.name ? teamToUpdate : team);

        // Fluently Return the Teams Object
        return this;
    }


    /**
     * Find a team by name or create a new one if it doesn't exist
     * @param {string} teamName - Name of the team to find or create
     * @return {Team} The found or newly created team
     */
    findOrCreate(teamName) {
        // Search for a team with the specified name
        let team = this.list.find(t => t.name === teamName);

        // If the team is not found, create and add it to the list array
        if (!team) {
            team = new Team(teamName);
            this.add(team);
        }

        // Return the found or created team
        return team;
    }

    /**
     * Find a team by a member or member ID
     * @param {Member|number} member - Member object or member ID to find the team by
     * @return {Team|null} The team containing the member, or null if not found.
     */
    findTeamByMember(memberToFind) {
        let memberToFindID;

        // Check if the argument is a Member object and extract the ID, otherwise treat it as a memberToFind ID
        if (memberToFind instanceof Member) {
            memberToFindID = memberToFind.id;
        } else if (typeof memberToFind === 'number') {
            memberToFindID = memberToFind;
        } else {
            console.log("The argument must be a Member object or a member ID");
            return null;
        }

        //Search through each team's members for a member with the given ID
        for (const team of this.list) {
            const foundMember = team.members.find(member => member.id === memberToFindID);
            //If a Member is Found
            if (foundMember) {
                // Return the Corresponding Team
                return team;
            }
        }

        // Error Handler - If no team with the specified member is found, log an error
        console.log(`No team found with a member having ID ${memberToFindID}`);
        return null;
    }


    /**
     * Add a new Team to the Teams list
     * @param {Team} team - The Team object to add
     * @return {Teams} - Fluent return of this Teams object
     */
    add(team) {
        // Error Handler
        if (!(team instanceof Team)) {
            console.log("Provided object is not an instance of Team");
            return this;
        }

        // Check if a team with the same name already exists
        const existingTeam = this.list.find(t => t.name === team.name);

        // If there's an existing team, update it
        if (existingTeam) {
            this.update(team);
            return this;
        }

        // Add the new team to the list
        this.list.push(team);

        // Fluent return
        return this;
    }

    /**
     * Remove a Team from the Teams list by team object or team name
     * @param {Team|string} teamToRemove - The Team object or the name of the Team to remove
     * @return {Team|null} - The removed Team object, or null if not found
     */
    remove(teamToRemove) {
        let teamToRemoveName;

        // Check if 'team' is a Team object and extract the team name, otherwise treat it as a team name string
        if (teamToRemove instanceof Team) {
            teamToRemoveName = teamToRemove.name;
        } else if (typeof teamToRemove === 'string') {
            teamToRemoveName = teamToRemove;
        } else {
            console.log("The argument must be a Team object or a team name string");
            return null;
        }

        // Find the team object with the specified name
        const foundTeamToRemove = this.list.find(team => team.name === teamToRemoveName);

        // If no team is found, log an error and return null
        if (!foundTeamToRemove) {
            console.log(`No team found with the name ${teamToRemoveName}`);
            return null;
        }

        // Filter out the team to remove
        this.list = this.list.filter(team => team !== foundTeamToRemove);

        // Return the removed Team
        return foundTeamToRemove;
    }

    /**
     * Void Method that Cleanses any Empty Teams within the List
     * @return {Teams}
     */
    cleanse() {
        // Only retain teams that have members
        this.list = this.list.filter(team => team.members.length > 0);

        //Fluent Return
        return this;
    }
}

export default Teams;
