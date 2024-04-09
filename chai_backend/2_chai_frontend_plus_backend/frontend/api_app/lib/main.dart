import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Full Stack With Node Js',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  Future<List<Map<String, dynamic>>> fetchJokes() async {
    final response =
        await http.get(Uri.parse('http://192.168.246.180:3000/jokes'));

    if (response.statusCode == 200) {
      // Parse the JSON response
      List<dynamic> data = json.decode(response.body);

      // Map the JSON data to a list of joke objects
      List<Map<String, dynamic>> jokes = data.map((json) {
        return {
          'id': json['id'],
          'jokeTitle': json['jokeTitle'],
          'jokeContent': json['jokeContent']
        };
      }).toList();

      return jokes;
    } else {
      throw Exception('Failed to load jokes');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: FutureBuilder<List<Map<String, dynamic>>>(
        future: fetchJokes(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const CircularProgressIndicator();
          } else if (snapshot.hasError) {
            return Text('Error: ${snapshot.error}');
          } else {
            // Display the list of jokes
            List<Map<String, dynamic>> jokes = snapshot.data!;
            return ListView.builder(
              itemCount: jokes.length,
              itemBuilder: (context, index) {
                return ListTile(
                  title: Text(jokes[index]['jokeTitle']),
                  subtitle: Text(jokes[index]['jokeContent']),
                );
              },
            );
          }
        },
      ),
    );
  }
}
