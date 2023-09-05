pipeline {
  agent any
   tools {nodejs "nodejs16.15.1"} 
  stages {				
    stage('Build') {
		steps {
			sh '''
            whoami
            lerna -v
			yarn
			lerna bootstrap
			cd packages/app
			yarn run build
			'''
		}		
	}
	stage('Test') {
		steps {
			echo "No Test" 	
		}		
	}
    stage('Deploy') {
      steps {
            script {
                if (env.BRANCH_NAME == 'master') {
                    sh '/usr/local/bin/docker-compose -f docker-compose.yml up -d --build'    
                }
            }   
      }
    }
  }
}