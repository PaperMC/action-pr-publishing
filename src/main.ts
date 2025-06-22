import { context } from '@actions/github'
import { runFromPr, runFromWorkflow } from './pr_publish'
import { runFromTrigger } from './pr_triggers'

export async function run() {
  if (context.eventName == 'pull_request') {
    await runFromPr()
    return
  }

  if (context.eventName == 'workflow_run') {
    await runFromWorkflow()
  } else {
    await runFromTrigger()
  }
}
