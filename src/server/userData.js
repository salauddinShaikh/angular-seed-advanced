// List of hardcoded users along with their details.
var users = [
    {
        Id: 10,
        UserName: 'admin',
        Password: 'password',
        Permissions: [
            'Timesheet.READ','Timesheet.CREATE','Timesheet.UPDATE','Timesheet.DELETE',
            
            'ConferenceBook.READ','ConferenceBook.CREATE','ConferenceBook.UPDATE','ConferenceBook.DELETE',
            'Leave.READ','Leave.CREATE','Leave.UPDATE','Leave.DELETE',
            'Holiday.READ','Holiday.CREATE','Holiday.UPDATE','Holiday.DELETE',
            'ApprovalLeave.READ','ApprovalLeave.CREATE','ApprovalLeave.UPDATE','ApprovalLeave.DELETE',
            'BulkApprovalLeave.READ','BulkApprovalLeave.CREATE','BulkApprovalLeave.UPDATE','BulkApprovalLeave.DELETE',
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
    },

    {
        Id: 14,
        UserName: 'user4',
        Password: 'password',
        Permissions: ['Leave.READ','Holiday.READ','Leave.CREATE','ApprovalLeave.READ','BulkApprovalLeave.READ']
    },
    {
        Id: 15,
        UserName: 'user5',
        Password: 'password',
        Permissions: ['Leave.READ','Leave.CREATE',]
    },
    {
        Id: 16,
        UserName: 'user6',
        Password: 'password',
        Permissions: ['Leave.READ','ApprovalLeave.READ','BulkApprovalLeave.READ']
    },
    {
        Id: 17,
        UserName: 'user7',
        Password: 'password',
        Permissions: ['Leave.READ','Holiday.READ','ApprovalLeave.READ']
    }];
module.exports = users;