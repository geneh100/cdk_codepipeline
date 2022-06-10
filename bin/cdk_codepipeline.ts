#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkCodepipelineStack } from '../lib/cdk_codepipeline-stack';

const app = new cdk.App();
new CdkCodepipelineStack(app, 'CdkCodepipelineStack', {
  env: {
    account: "979348713075",      // replace with your aws account ID
    region: "us-east-2",         // replace with your preferred region
  },
});