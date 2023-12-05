/**
 * Author: Jay Annadurai
 * Date: 28 Nov 2023
 * File: Member.js
 * Project: 7-vue
 * Description: Class to Represent a Member
 */

/* Sample Member Data
{
    "id": 2,
    "name": "Joey Tribbiani",
    "phone": "321 321 4321",
    "email": "jtribby@gmail.com",
    "role": "UI/UX",
    "team": ""
}
*/

class Member {
    /**
     * Constructs a Member Object
     * @param id - Integer ID of the Member
     * @param name - String Name of the Member
     * @param phone - String Phone Number of the Member
     * @param email - String E-Mail of the Member
     * @param role - String Role of the Member
     * @param team - String Name of the Member's Team | Default: ''
     */
    constructor({ id, name, phone, email, role, team = '' }) {
        this.id = id;
        this.name = name;
        this.phone = Member.formatPhoneNumber(phone);
        this.email = email;
        this.role = role;
        this.team = team;
    }

    // Method to assign a member to a team
    assignToTeam(teamName) {
        this.team = teamName;
    }

    // Method to remove a member from a team
    removeFromTeam() {
        this.team = '';
    }


    /**
     * Formats a Phone Number
     * @param phoneNumber - String Phone Number in the Form ### ### ####
     * @return {string} - String Phone Number in the Form (###) ###-####
     */
    static formatPhoneNumber(phoneNumber) {
        // Assuming phone is a string like '123 456 7890'
        const areaCode = phoneNumber.slice(0, 3);
        const middleNumber = phoneNumber.slice(4, 7);
        const finalNumber = phoneNumber.slice(8, 12);

        return `(${areaCode}) ${middleNumber}-${finalNumber}`;
    }
}

export default Member;