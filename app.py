from flask import Flask, render_template, request, redirect, url_for
import mysql.connector
from flask_mail import Mail, Message
import os

app = Flask(__name__)

# Flask-Mail Configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = 'your-email@gmail.com'  # Replace with your Gmail address
app.config['MAIL_PASSWORD'] = 'your-app-password'  # Replace with your Gmail app password
app.config['MAIL_DEFAULT_SENDER'] = 'your-email@gmail.com'

mail = Mail(app)


# Configure MySQL connection
def get_db_connection():
    connection = mysql.connector.connect(
        host='localhost',
        user='root',  # Replace with your MySQL username
        password='linux',  # Replace with your MySQL password
        database='portfolio_super_python_mysql_db'  # Replace with your MySQL database name
    )
    return connection


# Route for the Contact section
@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        # Get form data
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']

        # Save form data to MySQL database
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute("INSERT INTO contact_messages (name, email, message) VALUES (%s, %s, %s)",
                           (name, email, message))
            conn.commit()
            cursor.close()
            conn.close()
            print("Form data saved to the database.")
        except Exception as e:
            print(f"Error saving to the database: {e}")

        # Send an email notification
        email_sent = False
        try:
            msg = Message(subject="New Contact Form Submission",
                          recipients=["recipient-email@example.com"],  # Replace with your recipient's email
                          body=f"New message from {name} ({email}):\n\n{message}")
            mail.send(msg)
            print("Email sent successfully.")
            email_sent = True  # If the email is sent successfully, mark email_sent as True
        except Exception as e:
            print(f"Error sending email: {e}")  # Logs the error to console

        # Redirect to home page after successful form submission
        return redirect(url_for('home'))

    return render_template('index.html', section="contact", name='', email='', message='')


# Route for Home page
@app.route('/')
def home():
    return render_template('index.html')  # Your home page template


if __name__ == '__main__':
    app.run(debug=True)
