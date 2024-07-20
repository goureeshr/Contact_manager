import 'package:flutter/material.dart';
import 'package:frontend/addcontacts.dart';


void main() {
  runApp(const ContactManagerApp());
}

class ContactManagerApp extends StatelessWidget {
  const ContactManagerApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: ContactManagerHome(),
    );
  }
}

class ContactManagerHome extends StatelessWidget {
  const ContactManagerHome({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Contact Manager'),
        backgroundColor: Colors.white,
      ),
      body: Container(
        color: Colors.black,
        child: const Center(
          child: Text(
            'Welcome to Contact Manager!',
            style: TextStyle(color: Colors.white, fontSize: 24),
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.push(
    context,
    MaterialPageRoute(builder: (context) => AddContactPage()),
  );
        },
        backgroundColor: Colors.white,
        child: const Icon(Icons.add, color: Colors.black),
      ),
    );
  }
}
