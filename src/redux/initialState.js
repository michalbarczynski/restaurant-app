const initialState = {
    tables: [
        {
            "id": 1,
            "status": "Busy",
            "peopleAmount": 4,
            "maxPeopleAmount": 4,
            "bill": 0
        },
        {
            "id": 2,
            "status": "Busy",
            "peopleAmount": 3,
            "maxPeopleAmount": 4,
            "bill": 5
        },
        {
            "id": 3,
            "status": "Cleaning",
            "peopleAmount": 1,
            "maxPeopleAmount": 2,
            "bill": 12
        },
        {
            "id": 4,
            "status": "Cleaning",
            "peopleAmount": 2,
            "maxPeopleAmount": 2,
            "bill": 58
        },
        {
            "id": 5,
            "status": "Free",
            "peopleAmount": 6,
            "maxPeopleAmount": 8,
            "bill": 130
        }
    ],
};

export default initialState;   