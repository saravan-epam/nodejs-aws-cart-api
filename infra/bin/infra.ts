#!/usr/bin/env node

import * as cdk from 'aws-cdk-lib';
import { CartServiceStack } from '../lib/cart-service-stack';

const app = new cdk.App();
new CartServiceStack(app, 'CartServiceStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});
