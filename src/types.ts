import { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods'

export type WorkflowRun =
  RestEndpointMethodTypes['actions']['getWorkflowRun']['response']['data']
export type PullRequest =
  RestEndpointMethodTypes['pulls']['get']['response']['data']
