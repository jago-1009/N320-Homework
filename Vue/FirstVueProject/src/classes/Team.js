/**
 * Author: Jay Annadurai
 * Date: 28 Nov 2023
 * File: Team.js
 * Project: 7-vue
 * Description: Class to Represent a Team full of Members
 */

//Import the Member Class
import Member from './Member';

class Team {
    /**
     * @param teamName - String Name of the Team
     * @param members - Array of Member Objects
     */
    constructor(teamName,...members) {
        this.name = teamName;
        // Filter out any non-Member instances if necessary or throw an error
        this.members = members.filter(member => member instanceof Member);
    }

    /**
     * Add a Member into the Team
     * @param member - Member Object to Insert into the Array of Members
     */
    addMember(member) {
        //Error Handler
        if(!(member instanceof Member)) { console.log("Added member is not of class type Member"); return this;}

        //Check if the existing array of Members already has a Member by that ID
        if (this.members.some(existingMember => existingMember.id === member.id)) {
            console.log("Member with this ID already exists in the team");
            return this; // Return early if a member with the same ID already exists
        }

        //Update the Member's Team to the Name of the Team
        member.team = this.name;

        //Push the Member into the Array
        this.members.push(member);

        //Fluent Return
        return this;
    }//End of addMember Method

    /**
     * Remove a Member from the Team by Member Object or by Member ID
     * @param {Member|number} member - Member object or member ID to remove the corresponding Member Object
     * @return {Member|null} - Returns the removed Member Object, or null if not found
     */
    removeMember(memberToRemove) {

        //Initialize the memberToRemove's ID
        let memberToRemoveID;

        // Check if 'member' is a Member object and extract the ID, otherwise treat it as a member ID
        if (memberToRemove instanceof Member) {
            memberToRemoveID = memberToRemove.id;
        } else if (typeof memberToRemove === 'number') {
            memberToRemoveID = memberToRemove;
        } else {
            console.log("The argument must be a Member object or a member ID");
            return null;
        }

        // Find the member object with the specified ID
        const foundMemberToRemove = this.members.find(member => member.id === memberToRemoveID);

        // Error Handler - If there is no matching member
        if (!foundMemberToRemove) {
            console.log(`No matching member with an ID of ${memberToRemoveID} to remove`);
            return null;
        }

        // Update the 'Team' property of the matching Member to ''
        foundMemberToRemove.team = '';

        // Filter out the member to remove
        this.members = this.members.filter(member => member.id !== memberToRemoveID);

        // Return the removed Member
        return foundMemberToRemove;

    }//End of removeMember Method

}//End of Teams Class

export default Team;
