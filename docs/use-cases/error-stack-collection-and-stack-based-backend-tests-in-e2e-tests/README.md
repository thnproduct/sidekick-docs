---
title: Error stack collection & stack-based backend tests in E2E tests
sidebar_position: 9
slug: /use-cases/error-stack-collection-and-stack-based-backend-tests-in-e2e-tests
---

import { Card } from "@site/src/components/Card";

# Error stack collection & stack-based backend tests in E2E tests

E2E tests ensure that the application performs as expected by running the test cases based on user workflows. Tools such as Cypress, Playwright & Selenium enable us to define and apply those tests easily.

Logpoints, tracepoints, error stack collection, and stack-based tests are debugging techniques that can be useful for troubleshooting issues and testing the behavior of an application. In the context of end-to-end (E2E) tests, these techniques can help you understand how the backend of your application is behaving and identify any issues or bugs that may be affecting the system's overall performance.

Logpoints and tracepoints allow you to insert log statements & non-breaking breakpoints into the code at specific points, which can help understand the code flow and identify any issues or bugs that may be occurring. For example, suppose you are running an E2E test, and you suspect that a problem is happening in the backend. In that case, you could use logpoints or tracepoints to help understand what is happening at each step.

Error stack collection involves collecting the stack trace of an error that occurs during the execution of the application. This can be useful for identifying the root cause of a mistake and understanding how it affects the system's overall behavior. For example, if you are running an E2E test and you encounter an error at the backend, you can use error stack collection to collect the stack trace of the error and help identify the root cause.

Stack-based tests are tests that are based on the execution of the application's code rather than on the application's output. This can be useful for testing the behavior of the backend, as it allows you to validate the execution of the code and identify any issues or bugs that may be occurring. For example, if you are running an E2E test and want to validate the behavior of the backend, you could use stack-based tests to validate the execution of the code that is relevant to the test.

Overall, logpoints, tracepoints, error stack collection, and stack-based tests can be helpful tools for troubleshooting issues and testing the behavior of the backend in an E2E testing environment. They can help you understand how the backend behaves and identify any problems or bugs affecting the system's overall performance.\


<div className="w-full cols-1">

<Card title="Article: Collecting error stacks from backend as exceptions occur in E2E tests — A tutorial on Cypress" target="https://medium.com/runsidekick/collecting-error-stacks-from-backend-as-exceptions-occur-in-e2e-tests-a-tutorial-on-cypress-ab36793dde30" isNewWindow={true}>

</Card>

</div>
