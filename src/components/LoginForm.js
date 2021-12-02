import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function LoginForm(){
    return <div>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                {this.state.t('login-label')}
            </Button>
        </Form>
    </div>
}

export default LoginForm