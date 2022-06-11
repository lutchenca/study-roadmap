### resources

[https://zellwk.com/blog/seed-database/](https://zellwk.com/blog/seed-database/) - ****Seeding a database****

[https://dev.to/larswaechter/database-seeding-in-node-js-518d](https://dev.to/larswaechter/database-seeding-in-node-js-518d)

[https://docs.cyberark.com/Product-Doc/OnlineHelp/AAM-DAP/Latest/en/Content/Deployment/HighAvailability/cluster-seeding-nodes.htm](https://docs.cyberark.com/Product-Doc/OnlineHelp/AAM-DAP/Latest/en/Content/Deployment/HighAvailability/cluster-seeding-nodes.htm)

### What is seed data

When you write tests for the backend, you need to test for four different kinds of operations:

- Create (for adding things to the database)
- Read (for getting things from the database)
- Update (for changing the database)
- Delete (for deleting things from the database)

The easiest type to test for is create operations. You put something into the database and test whether it’s there. For the other three types of operations, you need to put something into the database before you write the test.

**The process where you add initial content to a database is called seeding.**