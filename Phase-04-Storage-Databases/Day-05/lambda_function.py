import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('devops-users')

def lambda_handler(event, context):

    method = event.get('requestContext', {}).get('http', {}).get('method')

    if method == 'POST':
        body = json.loads(event['body'])

        table.put_item(Item={
            'user_id': body['user_id'],
            'email': body['email'],
            'name': body['name'],
            'role': body['role']
        })

        return {
            'statusCode': 200,
            'body': json.dumps('User created successfully')
        }

    elif method == 'GET':
        params = event.get('queryStringParameters')

        response = table.get_item(
            Key={
                'user_id': params['user_id'],
                'email': params['email']
            }
        )

        return {
            'statusCode': 200,
            'body': json.dumps(response.get('Item', {}))
        }
