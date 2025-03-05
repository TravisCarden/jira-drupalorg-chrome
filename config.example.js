
// copy this file to config.js and update the domain to start.
// jira_create_url doesn't work now😭
const jiraConfig = {
    "jira_create_url":
        "https://my-domain.atlassian.net/secure/CloneIssueDetails!default.jspa?id=12345",
    "jira_base_url": "https://my-domain.atlassian.net/",
    // Enable/disable enhancements to drupal.org.
    "enable_drupal_org_enhancements": true,
    // Enable/disable enhancements to Jira at `jira_base_url`.
    "enable_jira_enhancements": true,
};
export { jiraConfig };
