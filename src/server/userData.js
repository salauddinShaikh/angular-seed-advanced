// List of hardcoded users along with their details.
var users = [
    {
        Id: 10,
        UserName: 'admin',
        Password: 'password',
        Permissions: [
            'Timesheet.READ','Timesheet.CREATE','Timesheet.UPDATE','Timesheet.DELETE',
            'Leave.READ','Leave.CREATE','Leave.UPDATE','Leave.DELETE',
            'Holiday.READ','Holiday.CREATE','Holiday.UPDATE','Holiday.DELETE',
            'ConferenceBook.READ','ConferenceBook.CREATE','ConferenceBook.UPDATE','ConferenceBook.DELETE',
             ]
    },
    {
        Id: 11,
        UserName: 'user1',
        Password: 'password',
        Permissions: [ 'Leave.READ','Leave.CREATE','Leave.UPDATE','Leave.DELETE' ]
    },
    {
        Id: 12,
        UserName: 'user2',
        Password: 'password',
        Permissions: [ 'Holiday.READ','Holiday.CREATE','Holiday.UPDATE','Holiday.DELETE', ]
    },
    {
        Id: 13,
        UserName: 'user3',
        Password: 'password',
        Permissions: [   'ConferenceBook.READ','ConferenceBook.CREATE','ConferenceBook.UPDATE','ConferenceBook.DELETE' ]
    }];
module.exports = users;