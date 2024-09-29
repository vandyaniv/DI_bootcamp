import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      inputMessage: '',
      submittedMessage: '',
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('/api/hello');
      if (!response.ok) {
        throw new Error('Network response was not ok ');
      }
      const data = await response.json();
      this.setState({ message: data.message });
    } catch (error) {
      console.error('error fetchin data :', error);
    }
  }

  handleChange = (e) => {
    this.setState({ inputMessage: e.target.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const { inputMessage } = this.state;
    try {
      const response = await fetch('/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: inputMessage }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.setState({ submittedMessage: data.message, inputMessage: '' });
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  render() {
    const { message, inputMessage, submittedMessage } = this.state;
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>{message || 'Loading...'}</h1>
        <form onSubmit={this.handleSubmit} style={{ marginTop: '20px' }}>
          <input type="text" value={inputMessage} onChange={this.handleChange} placeholder=" write your message" required style={{ padding: '10px', width: '300px', marginRight: '10px' }} />

          <button type="submit" style={{ padding: '10px 20px' }}>
            Envoyer
          </button>
        </form>

        {submittedMessage && <h2 style={{ marginTop: '20px', color: 'green' }}>{submittedMessage}</h2>}
      </div>
    );
  }
}

export default App;
