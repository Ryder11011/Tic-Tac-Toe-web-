# Use a valid lightweight OpenJDK 17 image
FROM eclipse-temurin:17-jdk-jammy

# Copy the JAR built by Maven
COPY target/*.jar app.jar

# Expose the default Spring Boot port
EXPOSE 8080

# Run the JAR
ENTRYPOINT ["java", "-jar", "/app.jar"]