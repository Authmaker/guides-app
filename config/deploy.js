/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  let ENV = {
    build: {}
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';

    ENV.gcloudUrl = 'https://storage.googleapis.com';
    ENV['gcloud-storage'] = {
      projectId: 'stone-circle-internal',
      bucket: 'authmaker-beginner-guides',
      filePattern: '**/*.{js,css,png,gif,ico,jpg,map,xml,txt,svg,swf,eot,ttf,woff,woff2,json}',
    };

    ENV['gcs-index'] = {
      projectId: 'stone-circle-internal',
      bucket: 'beginner-guides.authmaker.com',
      allowOverwrite: true,
    }
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
