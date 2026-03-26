# Use a lightweight Java image
FROM openjdk:17-jdk-slim

# Copy the JAR built by Maven
COPY target/*.jar app.jar

# Expose the default Spring Boot port
EXPOSE 8080

# Run the JAR
ENTRYPOINT ["java", "-jar", "/app.jar"]